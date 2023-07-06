function TOC({data = [], onChagePage = () =>{}}) {
    let list = [];
    for (let content of data) {
        list.push(
            <li key={content.id}>
                <a href="/" className="content" onClick={function (e) {
                    e.preventDefault();
                    setActive(content.id);
                    onChagePage(content.id);
                }}>{ content.title }</a>
            </li>
        );
    }
    return (
        <nav>
            <ul>
                { list }
            </ul>
        </nav>
    );
}
function setActive(id) {
    let anchores = document.querySelectorAll('.content');
    for (let i = 0; i < anchores.length; i++){
        anchores[i].classList.remove('active');
    }
    anchores[id].classList.add('active');
}
export default TOC;