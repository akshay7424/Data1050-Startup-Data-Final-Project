const models = require("../../models");
const express = require("express");

async function getNotifications(user) {
  await models.Notification.findAll({
    where: {
      targetID: user,
      read: false,
    },
  }).then(function (notifications) {
    let formattedNotifications = [];
    for (let notif of notifications) {
      formattedNotifications.push({
        content: notif.toJSON().content,
        read: notif.toJSON().read,
        postID: notif.toJSON().postID,
      });
    }
    console.log("&&&&&&&&&&&&&&&&&&&&&");
    console.log(formattedNotifications);
    return formattedNotifications;
  });
  //console.log(unseenNotifications);
}

module.exports.getNotifications = getNotifications;
