import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.ok ? response.json().then(setData) : setError(response.statusText))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [url]);
    return { data, loading, error };
}
