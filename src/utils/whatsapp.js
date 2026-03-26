export const generateWhatsAppLink = (cartItems, total) => {
  const phoneNumber = "5491112345678"; // Replace with actual LuGaMed WhatsApp number
  let message = "¡Hola LuGaMed! Me gustaría realizar el siguiente pedido:%0A%0A";
  
  cartItems.forEach(item => {
    message += `- ${item.quantity}x ${item.name} ($${item.price})%0A`;
  });
  
  message += `%0A*Total: $${total}*%0A%0A`;
  message += "Por favor, indíquenme los pasos a seguir para el pago y envío.";
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const generateProductWhatsAppLink = (product) => {
  const phoneNumber = "5491112345678"; // Replace with actual
  const message = `¡Hola LuGaMed! Estoy interesado/a en comprar el producto: *${product.name}* ($${product.price}). ¿Tienen stock disponible?`;
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
