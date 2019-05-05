// This Module contain validation for all endpoints

// Importing 3rd Party Modules
import { Joi , celebrate } from "celebrate";

// Exporting validations
module.exports = {
  postBookValidate : celebrate({
    body : Joi.object().keys({
      title : Joi.string().required() ,
      author : Joi.string().required() ,
      text : Joi.string().required()
    })
  }) ,
  getBookFromTitleValidate : celebrate({
    params : Joi.object().keys({
      title : Joi.string().required()
    })
  })
};
