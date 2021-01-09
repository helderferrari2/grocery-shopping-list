import ListItem from '../schemas/ListItem';

class ListItemController {
  async getAllListItemsByListId(request, response) {
    const { list_id } = request.body;
    const listItems = await ListItem.find({ list: list_id }).sort({
      createdAt: -1,
    });
    return response.json(listItems);
  }

  async store(request, response) {
    try {
      const { user_id } = request;
      const listItem = await ListItem.create({
        ...request.body,
        user: user_id,
        list: request.body.list_id,
      });
      return response.json(listItem);
    } catch (err) {
      return response.status(400).json({ error: 'Failed on create' });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      // Find and update data in database
      const listItem = await ListItem.findByIdAndUpdate(
        id,
        { ...request.body },
        { new: true }
      );
      return response.json(listItem);
    } catch (err) {
      return response.status(404).json({ error: 'Failed on update' });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      await ListItem.findByIdAndRemove(id);
      return response.json('Successfully');
    } catch (err) {
      return response.status(404).json({ error: 'Failed on delete' });
    }
  }
}

export default new ListItemController();
