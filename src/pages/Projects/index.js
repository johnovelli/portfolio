import './projects.css'

function Projects({ language }) {
    return (
            <div className='Projects'>
                <h1>{language === 'Pt-br' ? "Em construção;" : "Under construction;"}</h1>
            </div>
    )
}

export default Projects;