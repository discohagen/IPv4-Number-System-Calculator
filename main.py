def decimal_to_binary_in_a_byte(decimal: int) -> str:
    if 0 > decimal > 255:
        raise ValueError("")
    result: str = bin(decimal)[2::] 
    while len(result) < 8:
        result = "0" + result
    return result

def decimal_to_hexadecimal_in_a_byte(decimal: int) -> str:
    if 0 > decimal > 255:
        raise ValueError("")
    result: str = hex(decimal)[2::]
    if len(result) < 2:
        result = "0" + result
    return result

def binary_to_decimal_in_a_byte(binary: str) -> int:
    if len(binary) > 8:
        raise ValueError("")
    if not (all(bit in binary for bit in "01") or all(bit in binary for bit in "0") or all(bit in binary for bit in "1")):
        raise TypeError("")
    result = 0
    for i in range(8):
        result += int(binary[7 - i]) * (2**i)
    return result

def binary_to_hexadecimal_in_a_byte(binary: str) -> str:
    if len(binary) > 8:
        raise ValueError("")
    if not all(bit in "01" for bit in binary):
        raise TypeError("")
    return decimal_to_hexadecimal_in_a_byte(binary_to_decimal_in_a_byte(binary))

def hexadecimal_to_decimal_in_a_byte(hexadecimal: str) -> int:
    if len(hexadecimal) > 2:
        raise ValueError("")
    if not all(digit in "0123456789ABCDEF" for digit in hexadecimal):
        raise TypeError("")
    return int(hexadecimal, 16)

def hexadecimal_to_binary_in_a_byte(hexadecimal: str) -> str:
    if len(hexadecimal) > 2:
        raise ValueError("")
    if not all(digit in "0123456789ABCDEF" for digit in hexadecimal):
        raise TypeError("")
    return decimal_to_binary_in_a_byte(hexadecimal_to_decimal_in_a_byte(hexadecimal))