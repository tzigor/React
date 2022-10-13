import { FC, useEffect, useState } from 'react';
import './pages.css';

const api = 'https://api.spaceflightnewsapi.net';

interface IArticles {
    id: string;
    title: string;
}

export const Articles: FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState<IArticles[]>([]);

    useEffect(() => {
        getFetchArticles();
    }, []);

    const getFetchArticles = async () => {
        setLoading(true);
        setError('');
        setArticles([]);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const res = await fetch(`${api}/v3/articles`);

            const data: IArticles[] = await res.json();
            setArticles(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('error');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Articles</h2>
            {loading && <div>Loading...</div>}
            <button className="button" onClick={getFetchArticles}>Reload</button>
            <ul>
                {articles.map((acticle) => (
                    <li key={acticle.id}>{acticle.title}</li>
                ))}
            </ul>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};