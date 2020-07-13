module ApplicationHelper
  def contact_expert_button(contact, expert)
    link_text = contact.present? ?
      "Contacted on " + contact.created_at.strftime("%b %e") :
      "Contact"

    disabled = contact.present? ? 'disabled' : ''

    link_to(
      link_text,
      expert_contacts_path(expert_id: expert.id),
      method: :post,
      remote: true,
      class: "expert-btn btn btn-primary #{disabled}",
      id: expert.id
    )
  end
end
