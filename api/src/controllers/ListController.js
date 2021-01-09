import List from '../schemas/List';

class ListController {
  async index(request, response) {
    const { user_id } = request;
    const lists = await List.find({ user: user_id }).sort({ createdAt: -1 });
    return response.json(lists);
  }

  async store(request, response) {
    try {
      const { name } = request.body;
      const { user_id } = request;
      const list = await List.create({ name, user: user_id });
      return response.json(list);
    } catch (err) {
      return response.status(400).json({ error: 'Failed on create' });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      // Find and update data in database
      const list = await List.findByIdAndUpdate(
        id,
        { ...request.body },
        { new: true }
      );
      return response.json(list);
    } catch (err) {
      return response.status(404).json({ error: 'Failed on update' });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      await List.findByIdAndRemove(id);
      return response.json('Successfully');
    } catch (err) {
      return response.status(404).json({ error: 'Failed on delete' });
    }
  }
}

export default new ListController();
