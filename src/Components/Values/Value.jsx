import React, { useState } from 'react'
import { 
    Accordion, 
    AccordionItem, 
    AccordionItemHeading, 
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
 } from 'react-accessible-accordion'
import data from '../../unity/Accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'

function Value() {
  return (
    <section className="v-wrapper">
      <div className="padding w-full v-container">

        {/* Left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Right side */}
        <div className="v-right">
          <span>Our Value</span><br />
          <span>Value we give to you</span><br />
          <span>
            We always ready to help by providijng the best services for you. <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              data.map((item, id) => {

                const [className, setClassName] = useState(null)

                return(
                  <AccordionItem className={`accordionItem ${className}`} key={id} uuid={id}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='accordionButton'>

                        <AccordionItemState>
                          {({expanded}) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                        </AccordionItemState>

                        <div className="icon">{item.icon}</div>
                        <span className="value-heading">
                          {item.heading}
                        </span>
                        <div className="icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondary">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value