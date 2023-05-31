import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          href: 'index1',
        }}
      />
       <Tabs.Screen
        name="telaA"
        options={{
          href: null,
        }}
      />
       <Tabs.Screen
        name="telaB"
        options={{
          href: 'telaB',
        }}
      />
    </Tabs>
  );
}