import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,
       {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null; // Return null in case of error
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const data = await getTopicById(id);

  console.log(data); // Log the data to see its structure

  if (!data || !data.topic) {
    return <p>Error loading topic</p>;
  }

  const { topic } = data;
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
