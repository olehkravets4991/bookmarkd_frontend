import { createBrowerRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowerRouter(createRoutesFromElements(
    <Route path='/' element={<App />}>

    </Route>
));

export default router;