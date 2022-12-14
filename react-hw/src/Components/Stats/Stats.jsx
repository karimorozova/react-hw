 import s from './Stats.module.css'
 
 function Stats ({title, stats}) {
    return (
        <section className="statistics">
            <h2 className="title">{title && title}</h2>
        
            <ul className="stat-list"> {stats.map(item => (
                <li className="item" key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>
                ))} 
            </ul>
            {/* <li className="item">
                <span className="label">.docx</span>
                <span className="percentage">4%</span>
            </li>
            <li className="item">
                <span className="label">.mp3</span>
                <span className="percentage">14%</span>
            </li>
            <li className="item">
                <span className="label">.pdf</span>
                <span className="percentage">41%</span>
            </li>
            <li className="item">
                <span className="label">.mp4</span>
                <span className="percentage">12%</span>
            </li> */}
            
        </section>
    )
}

export default Stats