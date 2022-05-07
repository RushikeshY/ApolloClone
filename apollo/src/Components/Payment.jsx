import React from 'react';
import styled from 'styled-components';
import {RiArrowUpSLine} from 'react-icons/ri'

const MainDiv=styled.div`
color: #02475b;
display:flex;
width: 100%;
height: auto;
`
const LeftDiv=styled.div`
width:716px;
height:727px;
`
const RightDiv=styled.div`
width:358px;
height:727px;
`
const Payment = () => {
  return (
    <>
        <div >
            <h2>PAYMENTS</h2>
        </div>
        <hr />
        <MainDiv>
            <LeftDiv>
                <div>
                    <div style={{display: 'flex',width: '100%',justifyContent:'space-between'}}>
                        <p >CREDIT/DEBIT CARD PAYMENTS</p>
                        <RiArrowUpSLine style={{marginTop:'10px'}}/>
                    </div>

                </div>
            </LeftDiv>

            <RightDiv></RightDiv>
        </MainDiv>
        
        
    </>
  )
}

export default Payment