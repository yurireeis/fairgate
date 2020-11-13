import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        const hasUsedControlKeyOrMetaKey = event.metaKey || event.ctrlKey;

        if (hasUsedControlKeyOrMetaKey) { return; }

        event.preventDefault();
        window.history.pushState({}, '', href);
        const navigationEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navigationEvent);
    };

    return <span onClick={onClick} className={className} href={href}>{children}</span>;
};

export default Link;
