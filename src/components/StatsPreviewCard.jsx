import React from 'react'

// Css
import './StatsPreviewCard.css'

const StatsPreviewCard = () => {
    return (

        <div className='container'>
            <div className='statsContainer'>
                {/* title */}
                <h1 className='title'>
                    Get <span>insights</span> that help your business grow.
                </h1>

                {/* description */}
                <p className='description'>
                    Discover the benefits of data analytics and make better decisions
                    regarding revenue, costumer experience, and overall efficiency.
                </p>

                {/* stats categories */}
                <div className="statsCategories">
                    {/* companies */}
                    <div className='companies'>
                        <h3>10k+</h3>
                        <h4>COMPANIES</h4>
                    </div>

                    {/* templates */}
                    <div className='templates'>
                        <h3>314</h3>
                        <h4>TEMPLATES</h4>
                    </div>

                    {/* queries */}
                    <div className='queries'>
                        <h3>12M+</h3>
                        <h4>QUERIES</h4>
                    </div>
                </div>
            </div>

            {/* img */}
            <div className='imageContainer'>

            </div>
        </div>
    )
}

export default StatsPreviewCard