const LightDarkIcon = ({ toggleTheme }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        toggleTheme();
    };

    return (
        <li>
            <button
                type="button"
                className="theme-toggle"
                onClick={handleClick}
                aria-label="Toggle color theme"
            >
                <i className="bi bi-moon-fill theme-toggle__moon" aria-hidden="true" />
                <i className="bi bi-sun-fill theme-toggle__sun" aria-hidden="true" />
            </button>
        </li>
    );
};

export default LightDarkIcon;
