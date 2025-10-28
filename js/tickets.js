let tickets = [
  {
    id: 'TICKET-001',
    title: 'Website is not loading on mobile',
    description: 'Users are reporting that the homepage is showing a blank white screen when accessed from a mobile browser. This seems to be happening on both iOS and Android.',
    status: 'open',
    priority: 'high',
  },
  {
    id: 'TICKET-002',
    title: 'Login button is not working',
    description: 'The main login button on the authentication page is unresponsive. Clicking it does nothing. No errors are visible in the console.',
    status: 'in_progress',
    priority: 'high',
  },
  {
    id: 'TICKET-003',
    title: 'Update company address in footer',
    description: 'The address listed in the website footer is outdated. Please update it to our new headquarters address: 123 Tech Avenue, Silicon Valley.',
    status: 'closed',
    priority: 'low',
  },
  {
    id: 'TICKET-004',
    title: 'API endpoint is returning 500 error',
    description: 'The /api/users endpoint is consistently returning a 500 Internal Server Error, which is preventing the user list from loading.',
    status: 'in_progress',
    priority: 'medium',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const ticketListContainer = document.getElementById('ticket-list-container');
  const createBtn = document.getElementById('create-ticket-btn');
  const createModal = document.getElementById('create-modal');
  const createForm = document.getElementById('create-ticket-form');
  const editModal = document.getElementById('edit-modal');
  const editForm = document.getElementById('edit-ticket-form');

  const renderTickets = () => {
    ticketListContainer.innerHTML = '';
    tickets.forEach(ticket => {
      const ticketCard = document.createElement('div');
      ticketCard.className = 'card ticket-card';
      ticketCard.innerHTML = `
        <div class="ticket-header">
          <span class="ticket-id">${ticket.id}</span>
          <span class="status-tag status-${ticket.status.replace('_', '-')}">${ticket.status.replace('_', ' ')}</span>
        </div>
        <h3 class="ticket-title">${ticket.title}</h3>
        <div class="ticket-footer">
          <span class="priority-tag priority-${ticket.priority}">${ticket.priority}</span>
          <div class="ticket-actions">
            <button class="btn-icon edit-btn" data-id="${ticket.id}"><i class="fas fa-edit"></i></button>
            <button class="btn-icon btn-icon-danger delete-btn" data-id="${ticket.id}"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      `;
      ticketListContainer.appendChild(ticketCard);
    });

    addEventListenersToButtons();
  };

  const addEventListenersToButtons = () => {
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', () => handleDelete(button.dataset.id));
    });
    document.querySelectorAll('.edit-btn').forEach(button => {
      button.addEventListener('click', () => handleOpenEditModal(button.dataset.id));
    });
  };
  
  const openModal = (modal) => modal.style.display = 'flex';
  const closeModal = (modal) => modal.style.display = 'none';

  document.querySelectorAll('.modal-close-btn, .modal-cancel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(createModal);
      closeModal(editModal);
    });
  });

  createBtn.addEventListener('click', () => openModal(createModal));

  createForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;

    if (title.trim() === '') {
      document.getElementById('create-error').textContent = 'Title is mandatory.';
      return;
    }

    const newTicket = {
      id: `TICKET-${Math.floor(1000 + Math.random() * 9000)}`,
      title, description, status, priority: 'medium',
    };
    
    tickets.unshift(newTicket);
    renderTickets();
    closeModal(createModal);
    createForm.reset();
  });

  const handleDelete = (ticketId) => {
    if (confirm('Are you sure you want to delete this ticket?')) {
      tickets = tickets.filter(t => t.id !== ticketId);
      renderTickets();
    }
  };

  const handleOpenEditModal = (ticketId) => {
    const ticketToEdit = tickets.find(t => t.id === ticketId);
    if (ticketToEdit) {
      document.getElementById('edit-ticket-id').value = ticketToEdit.id;
      document.getElementById('edit-title').value = ticketToEdit.title;
      document.getElementById('edit-description').value = ticketToEdit.description;
      document.getElementById('edit-status').value = ticketToEdit.status;
      openModal(editModal);
    }
  };

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('edit-ticket-id').value;
    const title = document.getElementById('edit-title').value;
    const description = document.getElementById('edit-description').value;
    const status = document.getElementById('edit-status').value;

    if (title.trim() === '') {
      document.getElementById('edit-error').textContent = 'Title is mandatory.';
      return;
    }

    const ticketIndex = tickets.findIndex(t => t.id === id);
    if (ticketIndex !== -1) {
      tickets[ticketIndex] = { ...tickets[ticketIndex], title, description, status };
    }

    renderTickets();
    closeModal(editModal);
  });

  renderTickets();
});