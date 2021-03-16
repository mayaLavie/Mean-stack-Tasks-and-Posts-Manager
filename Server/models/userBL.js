const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/userModel');


exports.getAllUsers = function()
{
    return new Promise((resolve, reject) =>
    {
        User.find({}, function(err,userData)
        {   console.log(userData);
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData);
            }
        });
    })
}

exports.getUser = function(id)
    {
        return new Promise((resolve, reject) =>
        {
            User.findById(id, function(err,data)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(data)
                }
            })
        })
    }


exports.updateUser = function(id,userData)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndUpdate(id,
            {
                Name : userData.Name,
                Email : userData.Email,
                Street : userData.Street,
                City : userData.City,
                Zipcode : userData.Zipcode,
                Tasks : userData.Tasks,
                Posts : userData.Posts

            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated !')
                }
            })
           
    })
    
}



exports.addUser = function(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let NewUser = new User({
                Name : data.Name,
                Email : data.Email,
                Street : data.Street,
                City : data.City,
                Zipcode : data.Zipcode,
                Tasks : data.Tasks,
                Posts : data.Posts
            });
            NewUser.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Created!')
                }
            });
        });

    }


exports.deleteUser = function(id)
{
    return new Promise(  (resolve, reject) =>
    {
        User.findByIdAndDelete(id,function(err)
        { 
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve ('deleted');
            }
        });
    })
}