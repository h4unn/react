function Subject({ title, sub, onChagePage = () => {} }) {
    return (
        <header>
            <h1>
                <a href="/" onClick={e => {
                    e.preventDefault();
                    onChagePage('welcome');
                }}>{title}</a>
            </h1>
            <p>{sub}</p>
        </header>
    );
}
export default Subject;