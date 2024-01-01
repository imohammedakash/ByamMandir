"use client"
import React from 'react'
import Wrapper from '@/components/Wrapper'
import ExcerciseContainer from '@/components/Excercise/ExcerciseContainer'
const Excercise = () => {
    return (
        <Wrapper>
            <div className="p-5 flex items-start justify-center w-full bg-[#060d20] relative">
                <div className="w-full flex flex-wrap gap-4 justify-center">
                    <ExcerciseContainer id='biceps' category={['Biceps', 'delta', 'Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676629652/rope-bicep-curls_vqkjuv.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                    <ExcerciseContainer id='biceps' category={['Thai', 'Back']} tutorialImage='https://res.cloudinary.com/dn83xtspp/image/upload/v1676702355/883d061da85cd5b7bc90b59ec8e35194_wbwndk.gif' />
                </div>
            </div>
        </Wrapper>

    )
}

export default Excercise