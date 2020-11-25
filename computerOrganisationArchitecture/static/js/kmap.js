// Copyright (C) Thorsten Thormaehlen, Marburg, 2013, All rights reserved
// Contact: www.thormae.de

// This software is written for educational (non-commercial) purpose. 
// There is no warranty or other guarantee of fitness for this software, 
// it is provided solely "as is". 

function UIElement(x, y, width, height, type, ref, subref, slotType) {
  this.x = x;
  this.y = y;
  this.x2 = x + width;
  this.y2 = y + height;
  this.type = type; // 0 = field, 1 = slot, 2 connection
  this.ref = ref;
}

function KVField() {
  this.position = [0.0, 0.0];
  this.value = 0;
  this.active = false;
  this.uniqueID = -1;
  this.truthmapID = -1;
}

function KVBlock() {
  this.fieldID = -1;
  this.dimx = -1;
  this.dimy = -1;
  this.used = false;
  this.color = [0, 0, 0];
  this.primTerm = "";
}

function KarnaughMapDataCtrl(qmcRef) {
  this.noOfVars = -1;
  this.fieldLines = -1;
  this.fieldPerLine = -1;
  this.fieldBorder = -1;
  this.fieldHeight = 40;
  this.fieldWidth = 40;
  this.qmc = qmcRef;
  this.fields = new Array();
  this.blocks = new Array();
  this.allowDontCare = false;

  this.init = function (no) {

    this.noOfVars = no;

    this.qmc.setNoOfVars(no);

    var noOfEvenVars = Math.floor(this.noOfVars / 2);
    var noOfOddVars = Math.floor((this.noOfVars + 1) / 2);

    this.fieldLines = Math.pow(2, noOfEvenVars);
    this.fieldPerLine = Math.pow(2, noOfOddVars);
    this.fieldBorder = noOfOddVars * 20;

    this.fields.length = 0;
    this.blocks.length = 0;

    var id = 0;
    for (var i = 0; i < this.fieldLines; i++) {
      for (var j = 0; j < this.fieldPerLine; j++) {
        var field = new KVField();
        field.position[0] = this.fieldBorder + j * this.fieldWidth;
        field.position[1] = this.fieldBorder + i * this.fieldHeight;
        field.value = 0;
        field.uniqueID = id;
        this.fields.push(field);
        id++;
      }
    }

    var mapped = 0;
    this.fields[0].truthmapID = 0;
    this.fields[1].truthmapID = 1;
    var mirrorDirection = 0;
    var mirrorXCount = 2;
    var mirrorYCount = 1;
    var mapped = 2;
    var x = 0;
    var y = 1;
    var loop = 0;
    var direction = 0;
    while (loop < this.noOfVars - 1) {
      for (var xx = 0; xx < mirrorXCount; xx++) {
        for (var yy = 0; yy < mirrorYCount; yy++) {
          var loc = xx + yy * this.fieldPerLine;

          if (direction === 0) {
            var mirrorLoc = (x + xx) + (y + (mirrorYCount - 1) - yy) * this.fieldPerLine;
            this.fields[mirrorLoc].truthmapID = this.fields[loc].truthmapID + mirrorXCount * mirrorYCount;
          } else {
            var mirrorLoc = (x + (mirrorXCount - 1) - xx) + (y + yy) * this.fieldPerLine;
            this.fields[mirrorLoc].truthmapID = this.fields[loc].truthmapID + mirrorYCount * mirrorYCount;
          }
        }
      }
      if (direction === 0) {
        mirrorYCount = mirrorYCount * 2;
        x = mirrorXCount;
        y = 0;
        direction = 1;
      } else {
        mirrorXCount = mirrorXCount * 2;
        y = mirrorYCount;
        x = 0;
        direction = 0;
      }
      loop++;
    }

  };

  this.getKVFieldsCount = function () {
    return this.fields.length;
  };

  this.getKVFieldPositionX = function (fieldId) {
    return this.fields[fieldId].position[0];
  };

  this.getKVFieldPositionY = function (fieldId) {
    return this.fields[fieldId].position[1];
  };

  this.getKVFieldTruthmapID = function (fieldId) {
    return this.fields[fieldId].truthmapID;
  };

  this.getKVFieldValue = function (fieldId) {
    return this.fields[fieldId].value;
  };

  this.activated = function (fieldId) {

    this.fields[fieldId].value += 1;
    if (this.allowDontCare) {
      if (this.fields[fieldId].value > 2)
        this.fields[fieldId].value = 0;
    } else {
      if (this.fields[fieldId].value > 1)
        this.fields[fieldId].value = 0;
    }

    this.qmc.data.setFuncData(this.fields[fieldId].truthmapID, this.fields[fieldId].value);
    this.qmc.data.compute();
    this.qmc.update();
    this.compute();
  };

  this.random = function () {
    for (var i in this.fields) {
      if (this.allowDontCare) {
        this.fields[i].value = Math.floor(Math.random() * 3);
      } else {
        this.fields[i].value = Math.floor(Math.random() * 2);
      }
      this.qmc.data.setFuncData(this.fields[i].truthmapID, this.fields[i].value);
    }
    this.qmc.data.compute();
    this.qmc.update();
    this.compute();
  };

  this.clear = function () {
    for (var i in this.fields) {
      this.fields[i].value = 0;
      this.qmc.data.setFuncData(this.fields[i].truthmapID, this.fields[i].value);
    }
    this.qmc.data.compute();
    this.qmc.update();
    this.compute();
  };

  this.compute = function () {

    this.blocks.length = 0;

    var localFieldsValues = new Array();

    for (var m = 0; m < this.qmc.data.minimalTermPrims.length; m++) {
      var minPrim = this.qmc.data.minimalTermPrims[m];

      localFieldsValues.length = 0;
      for (var i in this.fields) {
        if (this.fields[i].truthmapID in minPrim.implicant.imp) {
          localFieldsValues.push(1);
        } else {
          localFieldsValues.push(0);
        }
      }

      var maxX = Math.floor(Math.log(this.fieldPerLine) / Math.LN2);
      var maxY = Math.floor(Math.log(this.fieldLines) / Math.LN2);

      // this might be computationally expensive (computing all possible blocks)
      for (var x = maxX; x >= 0; x--) {
        for (var y = maxY; y >= 0; y--) {
          var px = Math.pow(2, x);
          var py = Math.pow(2, y);
          var stepI = Math.max(Math.floor(py / 2), 1);
          var stepJ = Math.max(Math.floor(px / 2), 1);
          for (var i = 0; i < this.fieldLines; i += stepI) {
            for (var j = 0; j < this.fieldPerLine; j += stepJ) {

              var id = i * this.fieldPerLine + j;

              if (localFieldsValues[id] === 1) {

                // search zero
                var noZero = true;
                for (var xx = 0; xx < px && noZero; xx++) {
                  for (var yy = 0; yy < py && noZero; yy++) {
                    var otherId = ((i + yy) % this.fieldLines) * this.fieldPerLine + ((j + xx) % this.fieldPerLine);
                    if (localFieldsValues[otherId] === 0)
                      noZero = false;
                  }
                }

                if (noZero) {
                  var block = new KVBlock();
                  block.fieldID = id;
                  block.dimx = px;
                  block.dimy = py;
                  block.color = minPrim.color;
                  this.blocks.push(block);
                  if (true) { //clearing all 1s
                    for (var xx = 0; xx < px; xx++) {
                      for (var yy = 0; yy < py; yy++) {
                        var otherId = ((i + yy) % this.fieldLines) * this.fieldPerLine + ((j + xx) % this.fieldPerLine);
                        localFieldsValues[otherId] = 0;
                      }
                    }
                  }

                } // end if(noZero)
              } // end if (localFieldsValues[id] === 1)
            } // end j
          } // end i
        } // end y
      } // end x
    } // end m
  };
}

function KarnaughMap(parentDivId, qmcRef) {
  var data = new KarnaughMapDataCtrl(qmcRef);
  var qmc = qmcRef;
  var svg;
  var svgns = "http://www.w3.org/2000/svg";
  var divId = parentDivId;
  var fieldColor = "rgba(133, 178, 255, 1.0)";
  var hooveredKVFieldColor = "#AAD7FF";
  var hooveredElement = -1;
  var hooveredKVField = -1;
  var uiElements = new Array();
  var that = this;
  var overlays = new Array();
  var overlayStyle = 'position:absolute; font-family:"Times New Roman",Georgia,Serif; visibility:inherit;';
  var overlayStyle2 = overlayStyle + 'border: 1px solid gray; background:white; pointer-events:none;';
  var resultStyle = 'position:inline; font-family:"Times New Roman",Georgia,Serif; visibility:inherit;';
  var dontShowResult = false;
    
  this.init = function () {

    data.init(4);

    var width = data.fieldBorder + data.fieldPerLine * data.fieldWidth + 50;
    var height = data.fieldBorder + data.fieldLines * data.fieldHeight + 50;

    svg = document.createElementNS(svgns, "svg");
    if (!svg)
      console.log("KarnaughMap error: can not create a svg element");
    //svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute('id', parentDivId + "_KarnaughMap");
    document.body.appendChild(svg);

    var parent = document.getElementById(divId);
    if (!parent)
      console.log("KarnaughMap error: can not find an element with the given name: " + divId);
    parent.appendChild(svg);

    svg.onmousedown = function (event) {
      canvasMouseDown(event);
    };
    svg.onmousemove = function (event) {
      canvasMouseMove(event);
    };
    svg.onmouseup = function (event) {
      canvasMouseUp(event);
    };
    svg.onmouseup = function (event) {
      canvasMouseUp(event);
    };

    createOverlays();
    this.update();
  };

  this.setNoOfVars = function (no) {

    var c = parseInt(no);
    if (c < 1 && c > 10)
      return;

    hooveredKVField = -1;
    data.init(c);
    createOverlays();

    var width = data.fieldBorder + data.fieldPerLine * data.fieldWidth + 50;
    var height = data.fieldBorder + data.fieldLines * data.fieldHeight + 50;
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    this.update();
  };

  this.allowDontCares = function (type) {
    if (type > 0) {
      data.allowDontCare = true;
    } else {
      data.allowDontCare = false;
    }
    data.clear();
    this.update();
  };
  
  this.setDontShowResult = function (type) {
    if (type > 0) {
      dontShowResult = true;
    } else {
      dontShowResult = false;
    }
    this.update();
  };

  this.genRandom = function () {
    data.random();
    this.update();
  };

  this.clear = function () {
    data.clear();
    this.update();
  };

  function createOverlays() {

    var parent = document.getElementById(divId);
    if (!parent)
      console.log("KarnaughMap error: can not find an element with the given name: " + divId);
    parent.setAttribute('style', 'position:relative;');

    // remove old ones
    for (var i in overlays) {
      parent.removeChild(overlays[i]);
    }
    overlays.length = 0;

    for (var i = 0; i < data.noOfVars + 2; i++) {
      var overlay = document.createElement('div');
      overlay.setAttribute('style', 'position:absolute; top:0px; left:0px; visibility:hidden;');
      overlay.innerHTML = "overlay" + i;
      document.body.appendChild(overlay);

      parent.appendChild(overlay);
      overlays.push(overlay);
    }
  }



  function drawKVField(fieldId) {

    var fieldPosX = data.getKVFieldPositionX(fieldId);
    var fieldPosY = data.getKVFieldPositionY(fieldId);
    var truthmapID = data.getKVFieldTruthmapID(fieldId);
    var value = data.getKVFieldValue(fieldId);
    var dn = new UIElement(fieldPosX, fieldPosY, data.fieldWidth, data.fieldHeight, 0, fieldId, 0, 0);

    var strokeColor = "#000000";
    var fillColor = "#FFFFFF";
    if (fieldId === hooveredKVField) {
      fillColor = hooveredKVFieldColor;
    }

    var dx = dn.x2 - dn.x;
    var dy = dn.y2 - dn.y;

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('x', dn.x);
    rect.setAttribute('y', dn.y);
    rect.setAttribute('height', dx);
    rect.setAttribute('width', dy);
    rect.setAttribute('fill', fillColor);
    rect.setAttribute('stroke', strokeColor);
    svg.appendChild(rect);

    var text = document.createElementNS(svgns, 'text');

    var textColor = "#000000";
    if (value >= 2) {
      value = "X";
      textColor = "#C8C8C8";
    }
    text.setAttribute("fill", textColor);
    //text.setAttribute("style", "font-family: sans-serif; font-weight: normal; font-style: normal");
    text.setAttribute("font-family", "sans-serif");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "20");
    var posX = dn.x + Math.floor(dx / 2);
    var posY = dn.y2 - Math.floor(dx / 3);
    text.setAttribute("x", posX.toString());
    text.setAttribute("y", posY.toString());
    text.textContent = value.toString();
    svg.appendChild(text);

    uiElements.push(dn);

    if (true) {
      var text2 = document.createElementNS(svgns, 'text');
      text2.setAttribute("fill", "#909090");
      text2.setAttribute("text-anchor", "start");
      text2.setAttribute("font-family", "sans-serif");
      text2.setAttribute("font-size", "10");
      var posX = dn.x + Math.floor(dx / 32);
      var posY = dn.y2 - Math.floor(dy / 16);
      text2.setAttribute("x", posX.toString());
      text2.setAttribute("y", posY.toString());
      text2.textContent = truthmapID.toString();
      svg.appendChild(text2);
    }
  }

  function drawRoundRect(colorStr, x, y, width, height, radius) {
    var x1 = x + width;
    var y1 = y + height;

    var path = document.createElementNS(svgns, 'path');
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke", colorStr);
    path.setAttribute("fill", "none");

    var d = "";
    d += "M " + (x + radius) + "," + y;
    d += " L " + (x1 - radius) + "," + y;
    d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
    d += " L " + x1 + "," + (y1 - radius);
    d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
    d += " L " + (x + radius) + "," + y1;
    d += " Q " + x + "," + y1 + " " + x + "," + (y1 - radius);
    d += " L " + x + "," + (y + radius);
    d += " Q " + x + "," + y + " " + (x + radius) + "," + y;
    d += " Z";
    path.setAttribute("d", d);
    svg.appendChild(path);
  }

  function drawRoundRectOpenRightLeft(colorStr, x, y, w, height, radius, offset) {

    var width = w / 2 + Math.floor(data.fieldWidth * 0.6);

    var x1 = x + width;
    var y1 = y + height;

    var path = document.createElementNS(svgns, 'path');
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke", colorStr);
    path.setAttribute("fill", "none");

    var d = "";
    d += "M " + (x1 - radius) + "," + y1;
    d += " L " + (x + radius) + "," + y1;
    d += " Q " + x + "," + y1 + " " + x + "," + (y1 - radius);
    d += " L " + x + "," + (y + radius);
    d += " Q " + x + "," + y + " " + (x + radius) + "," + y;
    d += " L " + (x1 - radius) + "," + y;
    path.setAttribute("d", d);
    svg.appendChild(path);

    x1 = x + w + offset;
    x = x + offset + w / 2 - Math.floor(data.fieldWidth * 0.6);

    var path2 = document.createElementNS(svgns, 'path');
    path2.setAttribute("stroke-width", "3");
    path2.setAttribute("stroke", colorStr);
    path2.setAttribute("fill", "none");

    var d = "";
    d += "M " + (x + radius) + "," + y;
    d += " L " + (x1 - radius) + "," + y;
    d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
    d += " L " + x1 + "," + (y1 - radius);
    d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
    d += " L " + (x + radius) + "," + y1;
    path2.setAttribute("d", d);
    svg.appendChild(path2);

  }

  function drawRoundRectOpenTopDown(colorStr, x, y, width, h, radius, offset) {

    var height = h / 2 + Math.floor(data.fieldHeight * 0.6);
    var x1 = x + width;
    var y1 = y + height;


    var path = document.createElementNS(svgns, 'path');
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke", colorStr);
    path.setAttribute("fill", "none");

    var d = "";
    d += "M " + x1 + "," + (y1 - radius);
    d += " L " + x1 + "," + (y + radius);
    d += " Q " + x1 + "," + y + " " + (x1 - radius) + "," + y;
    d += " L " + (x + radius) + "," + y;
    d += " Q " + x + "," + y + " " + x + "," + (y + radius);
    d += " L " + x + "," + (y1 - radius);
    path.setAttribute("d", d);
    svg.appendChild(path);

    y1 = y + h + offset;
    y = y + offset + h / 2 - Math.floor(data.fieldHeight * 0.6);

    var path2 = document.createElementNS(svgns, 'path');
    path2.setAttribute("stroke-width", "3");
    path2.setAttribute("stroke", colorStr);
    path2.setAttribute("fill", "none");

    var d = "";
    d += "M " + x + "," + (y + radius);
    d += " L " + x + "," + (y1 - radius);
    d += " Q " + x + "," + y1 + " " + (x + radius) + "," + y1;
    d += " L " + (x1 - radius) + "," + y1;
    d += " Q " + x1 + "," + y1 + " " + x1 + "," + (y1 - radius);
    d += " L " + x1 + "," + (y + radius);
    path2.setAttribute("d", d);
    svg.appendChild(path2);

  }


  function drawRoundRectAllOpen(colorStr, xx, yy, w, h, radius, offsetX, offsetY) {
    var height = h / 2 + Math.floor(data.fieldHeight * 0.6);
    var width = w / 2 + Math.floor(data.fieldWidth * 0.6);

    var x = xx;
    var y = yy;
    var x1 = xx + width;
    var y1 = yy + height;

    var path = document.createElementNS(svgns, 'path');
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke", colorStr);
    path.setAttribute("fill", "none");

    var d = "";
    d += "M " + (x1 - radius) + "," + y;
    d += " L " + (x + radius) + "," + y;
    d += " Q " + x + "," + y + " " + x + "," + (y + radius);
    d += " L " + x + "," + (y1 - radius);
    path.setAttribute("d", d);
    svg.appendChild(path);

    x1 = xx + w + offsetX;
    x = xx + offsetX + w / 2 - Math.floor(data.fieldWidth * 0.6);

    var path2 = document.createElementNS(svgns, 'path');
    path2.setAttribute("stroke-width", "3");
    path2.setAttribute("stroke", colorStr);
    path2.setAttribute("fill", "none");

    var d = "";
    d += "M " + (x + radius) + "," + y;
    d += " L " + (x1 - radius) + "," + y;
    d += " Q " + x1 + "," + y + " " + x1 + "," + (y + radius);
    d += " L " + x1 + "," + (y1 - radius);
    path2.setAttribute("d", d);
    svg.appendChild(path2);

    y1 = yy + h + offsetY;
    y = yy + offsetY + h / 2 - Math.floor(data.fieldHeight * 0.6);
    x = xx;
    x1 = xx + width;

    var path3 = document.createElementNS(svgns, 'path');
    path3.setAttribute("stroke-width", "3");
    path3.setAttribute("stroke", colorStr);
    path3.setAttribute("fill", "none");

    var d = "";
    d += "M " + x + "," + (y + radius);
    d += " L " + x + "," + (y1 - radius);
    d += " Q " + x + "," + y1 + " " + (x + radius) + "," + y1;
    d += " L " + (x1 - radius) + "," + y1;
    path3.setAttribute("d", d);
    svg.appendChild(path3);

    x1 = xx + w + offsetX;
    x = xx + offsetX + w / 2 - Math.floor(data.fieldWidth * 0.6);

    var path4 = document.createElementNS(svgns, 'path');
    path4.setAttribute("stroke-width", "3");
    path4.setAttribute("stroke", colorStr);
    path4.setAttribute("fill", "none");

    var d = "";
    d += "M " + x1 + "," + (y + radius);
    d += " L " + x1 + "," + (y1 - radius);
    d += " Q " + x1 + "," + y1 + " " + (x1 - radius) + "," + y1;
    d += " L " + (x + radius) + "," + y1;
    path4.setAttribute("d", d);
    svg.appendChild(path4);
  }

  function drawKVBlock(blockId) {
    var fieldId = data.blocks[blockId].fieldID;

    var x0 = data.getKVFieldPositionX(fieldId);
    var y0 = data.getKVFieldPositionY(fieldId);
    var dx = data.blocks[blockId].dimx * data.fieldWidth;
    var dy = data.blocks[blockId].dimy * data.fieldHeight;
    var colorStr = "rgb(" + data.blocks[blockId].color[0].toString() + "," + data.blocks[blockId].color[1].toString() + "," + data.blocks[blockId].color[2].toString() + ")";

    var offsetX = (data.fieldWidth * data.fieldPerLine);
    var offsetY = (data.fieldHeight * data.fieldLines);
    var overX = (x0 + dx > offsetX + data.fieldBorder);
    var overY = (y0 + dy > offsetY + data.fieldBorder);
    if (overX && overY) {
      drawRoundRectAllOpen(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetX, -offsetY);
    } else {
      if (overX) {
        drawRoundRectOpenRightLeft(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetX);
      } else {
        if (overY) {
          drawRoundRectOpenTopDown(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17, -offsetY);
        } else {
          drawRoundRect(colorStr, x0 + 2, y0 + 2, dx - 4, dy - 4, 17);
        }
      }
    }
  }

  function drawKVFields() {
    var count = data.getKVFieldsCount();
    for (var i = 0; i < count; i++) {
      drawKVField(i);
    }
  }

  function drawKVBlocks() {
    var count = data.blocks.length;
    for (var i = 0; i < count; i++) {
      drawKVBlock(i);
    }
  }


  this.update = function () {

    uiElements.length = 0;

    // clear svg element
    while (svg.lastChild) {
      svg.removeChild(svg.lastChild);
    }

    // draws all fields
    drawKVFields();

    // draws all blocks
    if(!dontShowResult) drawKVBlocks();

    // draw labels
    if (overlays.length !== data.noOfVars + 2)
      console.log("KarnaughMap error: overlay not available");

    var labelNum = 1;
    var labelPos = 10;
    var k = 0;
    while (k < data.noOfVars) {

      overlays[k].innerHTML = "<i>x</i><sub><small>" + k + "</small></sub>"

      for (var x = 0; x < data.fieldPerLine; x++) {
        var bits = data.getKVFieldTruthmapID(x);

        if ((bits & labelNum) === labelNum) {
          var x0 = data.fieldWidth * x + data.fieldBorder;
          var x1 = data.fieldWidth * (x + 1) + data.fieldBorder;

          var path = document.createElementNS(svgns, 'path');
          path.setAttribute("stroke-width", "2");
          path.setAttribute("stroke", "#000000");
          path.setAttribute("fill", "none");

          var d = "";
          d += "M " + x0 + "," + (labelPos - 2);  // start marker
          d += " L " + x0 + "," + (labelPos + 2);
          d += " M " + x0 + "," + labelPos;
          d += " L " + x1 + "," + labelPos;
          d += " M " + x1 + "," + (labelPos - 2);  // end marker
          d += " L " + x1 + "," + (labelPos + 2);
          path.setAttribute("d", d);
          svg.appendChild(path);

          var style = overlayStyle + 'top:' + (labelPos - 10) + 'px; left:' + (x1 + 5) + 'px;';
          overlays[k].setAttribute('style', style);
        }
      }
      k++;
      if (k < data.noOfVars) {

        overlays[k].innerHTML = "<i>x</i><sub><small>" + k + "</small></sub>";

        labelNum = labelNum << 1; // move bit to left

        for (var y = 0; y < data.fieldLines; y++) {
          var bits = data.getKVFieldTruthmapID(y * data.fieldPerLine);
          if ((bits & labelNum) === labelNum) {
            var x0 = data.fieldHeight * y + data.fieldBorder;
            var x1 = data.fieldHeight * (y + 1) + data.fieldBorder;

            var path = document.createElementNS(svgns, 'path');
            path.setAttribute("stroke-width", "2");
            path.setAttribute("stroke", "#000000");
            path.setAttribute("fill", "none");

            var d = "";
            d += "M " + (labelPos - 2) + "," + x0;  // start marker
            d += " L " + (labelPos + 2) + "," + x0;
            d += " M " + labelPos + "," + x0;
            d += " L " + labelPos + "," + x1;
            d += " M " + (labelPos - 2) + "," + x1;  // end marker
            d += " L " + (labelPos + 2) + "," + x1;
            path.setAttribute("d", d);
            svg.appendChild(path);

            var style = overlayStyle + 'top:' + (x1) + 'px; left:' + (labelPos - 5) + 'px;';
            overlays[k].setAttribute('style', style);
          }
        }
        labelNum = labelNum << 1; // move bit to left
        labelPos += 20;
        k++;
      }
    }

    // draw binary value
    if (hooveredKVField >= 0 && hooveredKVField < data.getKVFieldsCount()) {
      var truthmapID = data.getKVFieldTruthmapID(hooveredKVField);
      var binString = truthmapID.toString(2);
      while (binString.length < data.noOfVars)
        binString = "0" + binString;

      var valueString = "";
      for (var z = 0; z < binString.length; z++) {
        valueString += binString[z];
        if (z < binString.length - 1)
          valueString += ",";
      }

      var value = data.getKVFieldValue(hooveredKVField);
      if (value >= 2)
        value = "X";
      valueString = "&nbsp;f(" + valueString + ") = " + value;
      //valueString += " (ID: " + hooveredKVField + ")";
      var textX = Math.floor(hooveredKVField % data.fieldPerLine) * data.fieldWidth + Math.floor(data.fieldWidth * 0.8) + data.fieldBorder;
      var textY = Math.floor(hooveredKVField / data.fieldPerLine) * data.fieldHeight + Math.floor(data.fieldHeight * 0.1) + data.fieldBorder;
      var style = overlayStyle2 + 'top:' + textY + 'px; left:' + textX + 'px;';
      overlays[data.noOfVars].setAttribute('style', style);
      overlays[data.noOfVars].innerHTML = valueString;
    } else {
      overlays[data.noOfVars].innerHTML = "";
      var style = 'visibility:hidden;';
      overlays[data.noOfVars].setAttribute('style', style);
    }

    // draw minterm
    var termX = data.fieldBorder;
    var termY = data.fieldHeight * data.fieldLines + data.fieldBorder;
    var termStyle = resultStyle + 'max-width:' + data.fieldPerLine * data.fieldWidth + 'px;';
    overlays[data.noOfVars + 1].setAttribute('style', termStyle);
    if(!dontShowResult) {
      overlays[data.noOfVars + 1].innerHTML = "<span class='qmcMathFont'><i>y</i>&nbsp;=&nbsp;" + qmc.data.coloredMinimalTerm + "</span></p>";
    }else{
      overlays[data.noOfVars + 1].innerHTML = "<span class='qmcMathFont'><i>y</i>&nbsp;=&nbsp;" + "<span style='color:rgb(255,0,0)'>hidden</span>"+ "</span></p>";
    }
  };
  
  function mouseOverElement(pos) {
    var selectedElement = -1;
    for (var n in uiElements) {
      if (uiElements[n].type !== 2) {
        // not of type "connection"
        if (uiElements[n].x - 1 < pos.x &&
                uiElements[n].x2 + 1 > pos.x &&
                uiElements[n].y - 1 < pos.y &&
                uiElements[n].y2 + 1 > pos.y)
        {
          selectedElement = n;
        }
      }
    }
    return selectedElement;
  }

  function canvasMouseDown(event) {
    var pos = getMouse(event);

    // handle selection
    if (!event.altKey && event.which === 1) {
      var selectedElement = mouseOverElement(pos);
      if (selectedElement !== -1) {
        // handle field selection
        if (uiElements[selectedElement].type === 0) {
          var newSelectedKVField = uiElements[selectedElement].ref;
          data.activated(newSelectedKVField);
        }
      }
      that.update();
    }
    event.preventDefault();
  }

  function canvasMouseUp(event) {
  }

  function canvasMouseMove(event) {
    var pos = getMouse(event);

    hooveredKVField = -1;
    var oldHooveredElement = hooveredElement;
    hooveredElement = mouseOverElement(pos);
    console.log(hooveredElement);
    if (hooveredElement !== -1) {
      hooveredKVField = uiElements[hooveredElement].ref;
    }
    if (oldHooveredElement !== hooveredElement)
      that.update();
    oldPos = pos;
    event.preventDefault();
  }

  function getMouse(e) {
    var element = document.getElementById(divId);
    var offsetX = 0, offsetY = 0, mx, my;

    // compute the total offset
    if (element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    
    console.log(mx + " " + my);
    return {x: mx, y: my};
  }
}