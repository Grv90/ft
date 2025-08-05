import React, { useState } from "react";
import { XMarkIcon } from "../Icons";
import Button from "../Button/Button";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import "./FeedbackModal.scss";

export interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="feedback-modal">
      <div className="feedback-modal__backdrop" onClick={onClose} />
      <div className="feedback-modal__content">
        <div className="feedback-modal__header">
          <h2 className="feedback-modal__title">How did it go?</h2>
          <button className="feedback-modal__close-btn" onClick={onClose}>
            <XMarkIcon width={20} height={20} fill="#666" />
          </button>
        </div>

        <div className="feedback-modal__body">
          <p className="feedback-modal__instruction">
            Please share with us your recent experience.
          </p>

          <div className="feedback-modal__input-section">
            <div className="feedback-modal__input-header">
              <span className="feedback-modal__input-label">Message</span>
            </div>
            <TextAreaInput
              placeholder="Enter your feedback..."
              value={message}
              onChange={setMessage}
              className="feedback-modal__textarea"
            />
          </div>
        </div>

        <div className="feedback-modal__actions">
          <Button variant="subtle-text" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleSubmit}
            disabled={!message.trim()}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
