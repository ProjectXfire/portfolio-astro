import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
// Styles
import styles from '../styles/messageForm.module.css';
// Services
import { sendEmail } from '../services/email';

const INIT_FORM = {
  subject: '',
  message: ''
};

function MessageForm() {
  const [fv, setFv] = useState(INIT_FORM);
  const [errors, setErrors] = useState(INIT_FORM);
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setFv(INIT_FORM);
  };

  const handleFormValues = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFv({ ...fv, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let errorSubject = '';
    let errorMessage = '';
    if (!fv.subject) errorSubject = 'Please add a subject';
    if (!fv.message) errorMessage = 'Please add a message';
    setErrors({ subject: errorSubject, message: errorMessage });
    if (fv.message && fv.subject) {
      setLoading(true);
      try {
        await sendEmail(fv.subject, fv.message);
        Swal.fire({
          icon: 'success',
          title: 'Ok',
          text: 'Message has sent successfully'
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      } finally {
        clearForm();
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles['message-form']}>
      <h3>You can send a message if you like 😄</h3>
      <form className={styles['form']} onSubmit={onSubmit}>
        <input
          name='subject'
          type='text'
          value={fv.subject}
          placeholder='Subject'
          onChange={handleFormValues}
        />
        {errors.subject && <span className={styles.error}>{errors.subject}</span>}
        <textarea
          name='message'
          cols='30'
          value={fv.message}
          rows='10'
          placeholder='Message'
          onChange={handleFormValues}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        <button
          className={styles[loading ? 'btn-loading' : 'btn-normal']}
          type='submit'
          disabled={loading}
        >
          Send 💬
        </button>
      </form>
    </div>
  );
}
export default MessageForm;
