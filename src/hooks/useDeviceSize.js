import { useState, useEffect } from 'react';

const useDeviceSize = () => {
    const [deviceSize, setDeviceSize] = useState('large');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDeviceSize('large');
            } else if (window.innerWidth >= 768) {
                setDeviceSize('medium');
            } else {
                setDeviceSize('small');
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return deviceSize;
};

export default useDeviceSize;
