import { launchToast } from "./toastify";

const formatCNPJ = (value: string): string => {
  // Remove all non-digit characters
  value = value.replace(/\D/g, "");

  // Format the CNPJ
  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");

  return value;
};

const validateCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/\D/g, "");

  if (cnpj.length !== 14) {
    launchToast({
      msg: "Preencha o campo com um CNPJ completo",
      type: "error",
    });
    return false;
  }

  // Validate DVs
  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != parseInt(digits.charAt(0))) {
    launchToast({
      msg: "CNPJ inálido",
      type: "error",
    });
    return false;
  }

  length += 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != parseInt(digits.charAt(1))) return false;

  return true;
};

export { formatCNPJ, validateCNPJ };
