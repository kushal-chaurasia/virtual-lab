/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function(){
    typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null
    ;function a(){
        function b(f,j){
            var g=SyntaxHighlighter.Match,i=f[0],
                    d=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(i),
                    c=[];
            if(f.attributes!=null){
                var e,h=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");
                while((e=h.exec(i))!=null){
                    c.push(new g(e.name,f.index+e.index,"color1"));
                    c.push(new g(e.value,f.index+e.index+e[0].indexOf(e.value),"string"))
                }}
            if(d!=null){c.push(new g(d.name,f.index+d[0].indexOf(d.name),"keyword"))
            }
            return c
        }
        this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},
            {regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},
            {regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),
                func:b}]}
    a.prototype=new SyntaxHighlighter.Highlighter();
    a.aliases=["xml","xhtml","xslt","html"];
    SyntaxHighlighter.brushes.Xml=a;
    typeof(exports)!="undefined"?exports.Brush=a:null})();


