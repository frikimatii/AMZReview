import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn, 
} from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FacebookIcon/>
          </MDBBtn>


          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <AlternateEmailIcon/>
          </MDBBtn>
        
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <TwitterIcon/> 
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <InstagramIcon/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:Frikimatii   <br></br>
        <a className='text-white' href='https://mdbootstrap.com/'>
          ReviewAMZReview.com
        </a>
      </div>
    </MDBFooter>
  );
}