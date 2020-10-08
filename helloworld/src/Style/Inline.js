import React from 'react';
import styles from './appStyles.module.css';
function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'orange'
    }
    return (
        <div>
            <h1 className={styles.success}>Success</h1>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inlinestyle</h1>
        </div>
    )
}
export default Inline