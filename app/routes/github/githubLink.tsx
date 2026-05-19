import { useEffect } from 'react';

export default function GithubLink() {
    useEffect(() => {
        window.location.replace(
            'https://github.com/duck-organization'
        );
    }, []);

    return <p>Redirecting to GitHub...</p>;
}