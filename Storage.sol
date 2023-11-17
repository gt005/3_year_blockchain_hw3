// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Storage {
    // Это не требовалось, но я часто использую Enum и мне интересна его работа тут
    enum UserType { Moderator, Regular, Engineer }

    struct Person {
        string name;
        uint age;
        UserType userType;
    }

    mapping(uint => Person) public people;

    event PersonAdded(uint id, string name, UserType userType);
    event PersonRemoved(uint id);

    function addPerson(uint _id, string memory _name, uint _age, UserType _userType) public {
        people[_id] = Person(_name, _age, _userType);
        emit PersonAdded(_id, _name, _userType);
    }

    function removePerson(uint _id) public {
        delete people[_id];
        emit PersonRemoved(_id);
    }
}