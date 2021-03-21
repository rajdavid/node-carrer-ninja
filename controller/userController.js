import Users from "../model/Users.js";
import catchAsync from '../helper/catchAsync.js';

const createUser = catchAsync(async (req, res, next) => {
    // inside create user using mongo db
    console.log('req .body  ----', req.body);

})

export default {
    createUser
};
