import React from 'react'
import aesop from '../images/aesop.png'
import comedy from '../images/comedy.png'
import everlane from '../images/everlane.png'
import glossier from '../images/glossier.png'
import kinfolk from '../images/kinfolk.png'
import pegasus from '../images/pegasus.png'
const Companies = () => {
    return (
        <div class="Companies_section">
            <div class="container">
                <div class="row align-items-center text-center">
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4 " >
                        <div class="aesop" >
                            <img src={aesop} alt="partner" />

                        </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div class="glossier" >
                            <img src={glossier} alt="partner" />
                        </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4">

                        <div class="kinfolk">
                            <img src={kinfolk} alt="partner" />

                        </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4">

                        <div class="everlane">
                            <img src={everlane} alt="partner" />

                        </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4">

                        <div class="pegasus">
                            <img src={pegasus} alt="partner" />
                        </div>

                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-4">

                        <div class="comedy">
                            <img src={comedy} alt="partner" />
                        </div>

                    </div>
                </div>
            </div>
            <div class="divider">

            </div>
        </div>
    )
}

export default Companies
