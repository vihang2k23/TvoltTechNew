<template>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" v-model="form.phone">
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" v-model="form.subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Send Inquiry</button>
      
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>
  </template>
  
  <script setup>
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const successMessage = ref('')
  const errorMessage = ref('')
  
  const submitForm = async () => {
  try {
    await $fetch('https://formspree.io/f/mjkrabod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    
    successMessage.value = 'Thank you for your inquiry! We will contact you soon.';
    // Reset form
    form.name = '';
    form.email = '';
    form.phone = '';
    form.subject = '';
    form.message = '';
  } catch (error) {
    errorMessage.value = 'There was an error submitting your form. Please try again.';
  }
}
  </script>
  
  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-weight: 600;
  }
  
  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .submit-btn {
    background: #2c3e50;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
  }
  
  .submit-btn:hover {
    background: #1a252f;
  }
  
  .success-message {
    color: green;
    margin-top: 1rem;
    padding: 1rem;
    background: #e8f5e9;
    border-radius: 4px;
  }
  
  .error-message {
    color: red;
    margin-top: 1rem;
    padding: 1rem;
    background: #ffebee;
    border-radius: 4px;
  }
  </style>