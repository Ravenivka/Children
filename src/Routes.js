import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFoun from './notfound';

function RouteLink() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button> <a href="/About">О НАС</a> </Button>
      <Button><a href="/">Главная</a></Button>      
    </ButtonGroup>
  );
}

export default function MainRoute() {

    return (
        <div>
        <RouteLink />
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" element={<Home />} />         
                
                <Route path = "/About" element={<About />} />
                    
                
                <Route element={<NotFoun />} path="*" />
                    
                
            </Routes>        
        </BrowserRouter>
        </div>
    );
}
