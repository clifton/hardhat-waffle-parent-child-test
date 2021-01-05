// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.5;

import './Parent.sol';

contract Child {
    address private owner;

    constructor(address _owner) {
        require(msg.sender != address(0x0), 'invalid address of parent');
        require(_owner != address(0x0), 'invalid address of owner');
        Parent parent = Parent(msg.sender);
        require(parent.isValid(), 'does not have a valid parent');
        owner = _owner;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}
