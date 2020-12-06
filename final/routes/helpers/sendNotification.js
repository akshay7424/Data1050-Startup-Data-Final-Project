const models = require("../../models");
const express = require("express");

async function sendNotification(toUser, content, postId) {
    models.Notification.create({
        content: content,
        targetID: toUser,
        postID: postId,
        read: false
    })
}

module.exports.sendNotification = sendNotification;
