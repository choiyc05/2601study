
export default function Main(req,res) {
    
    let html = "";
    let url = req.url;
    const index = req.url.indexOf("?");     // lastIndexOf() 끝에서부터 검색 <=> indexOf() 앞에서부터 검색
    if (index > 0) url = req.url.substring(0, index);
    if (url === "/a") {
        html = "<h2>A 주소 화면입니다.</h2>";
        const parameters = new URL(req.url, `http://${req.headers.host}`);
        for(const [key, value] of parameters.searchParams) {
        console.log(`${key} : ${value}`);
        html += `<h2>${value}</h2>`;
        }

    } else if (url === "/b") {
        html = "<h2>B 주소 화면입니다.</h2>";
    } else {
        html = "html 입니다.";
    }
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8;' });
    res.end(html);
    return html;
}