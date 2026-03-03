
export function text() {
    let html = "";

    html += "<h1>html입니다.</h1>";
    html += "<p>node service ...</p>";

    return html;
}

let cnt = 0;

export function controller(req) {
    
    let html = "";
    let url = req.url;
    const index = req.url.indexOf("?");     // lastIndexOf() 끝에서부터 검색 <=> indexOf() 앞에서부터 검색
    if (index > 0) url = req.url.substring(0, index);
    if (url === "/a") {
        html = "<h2>A 주소 화면입니다.</h2>";

        const parameters = new URL(req.url, `http://${req.headers.host}`);
        console.log(req.url);
        // console.log(typeof parameters.searchParams);
        console.log(parameters.searchParams);
        for(const [key, value] of parameters.searchParams) {
        console.log(`${key} : ${value}`);
        html += `<h2>${value}</h2>`;
    }

        // console.log(parameters.searchParams.get("name"));
        // console.log(parameters.searchParams.get("age"));

    } else if (url === "/b") {
        html = "<h2>B 주소 화면입니다.</h2>";
    } else if (url === "/cnt") {
        cnt++;
        html = `<p>방문자 수 : ${cnt}</p>`
    } else {
        html = text();
    }

    return html;
}