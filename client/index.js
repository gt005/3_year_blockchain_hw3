import contract from './contractConf.js';

const userId = 1;
const userName = 'Alice';
const userAge = 30;
const userType = 0;

contract.methods.addPerson(userId, userName, userAge, userType).send({ from: process.env.SENDER_ADDRESS })
    .then(function (receipt) {
        console.log("Запись успешно добавлена:", receipt);
    })
    .catch(function (error) {
        console.error("Ошибка при добавлении записи:", error);
    });


contract.methods.removePerson(userId).send({ from: process.env.SENDER_ADDRESS })
    .then(function (receipt) {
        console.log("Запись успешно удалена:", receipt);
    })
    .catch(function (error) {
        console.error("Ошибка при удалении записи:", error);
    });


contract.events.PersonAdded({}, function (error, event) {
    if (error) {
        console.error("Ошибка при прослушивании событий:", error);
    } else {
        console.log("Событие PersonAdded:", event);
    }
});

contract.events.PersonRemoved({}, function (error, event) {
    if (error) {
        console.error("Ошибка при прослушивании событий:", error);
    } else {
        console.log("Событие  :", event);
    }
});
