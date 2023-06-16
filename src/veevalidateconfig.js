import { configure } from 'vee-validate';

export default function veevalidateconfig() {
  configure({
    generateMessage: context => {
      const messages = {
        required: `The ${context.field} field is required.`,
        email: `The ${context.field} field must be a valid email.`,
      };

      const message = messages[context.rule.name] || `The ${context.field} field is invalid.`;
      return message;
    },
  });
}
