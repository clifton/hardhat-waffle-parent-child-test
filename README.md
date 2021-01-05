## minimal failing example for parent/child testing with hardhat/waffle

```
$ hardhat test
...
  1) Parent <-> Child relationship
       is able to create valid child:
     Error: call revert exception (method="isOwner()", errorSignature=null, errorArgs=[null], reason=null, code=CALL_EXCEPTION, version=abi/5.0.9)
```
