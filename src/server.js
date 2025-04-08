import express from 'express';
const server = express();

// Importando rotas
import RoutesPayment from './routes/payment.routes.js';
import RoutesUser from './routes/users.routes.js';
import RoutesQuest from './routes/quest.routes.js';
import RoutesProgress from './routes/progress.routes.js';
import RoutesPractices from './routes/practices.routes.js';
import RoutesStore from './routes/store.routes.js';
import RoutesFollowers from './routes/followers.routes.js';
import RoutesUserRewards from './routes/user_rewards.routes.js';
import RoutesUserPurchases from './routes/user_purchases.routes.js';
import RoutesUserQuests from './routes/user_quests.routes.js';
import RoutesRewards from './routes/rewards.routes.js';

// Novas rotas adicionadas:
import RoutesAchievements from './routes/achievements.routes.js';
import RoutesInsignias from './routes/insignias.routes.js';
import RoutesCustomization from './routes/customization.routes.js';

const PORT = process.env.PORT || 3000;

server.use(express.json());

// Usando as rotas
server.use("/api", RoutesPayment);
server.use("/api", RoutesUser);
server.use("/api", RoutesQuest);
server.use("/api", RoutesProgress);
server.use("/api", RoutesPractices);
server.use("/api", RoutesStore);
server.use("/api", RoutesFollowers);
server.use("/api", RoutesUserRewards);
server.use("/api", RoutesUserPurchases);
server.use("/api", RoutesUserQuests);
server.use("/api", RoutesRewards);

// Novas rotas adicionadas
server.use("/api", RoutesAchievements);
server.use("/api", RoutesInsignias);
server.use("/api", RoutesCustomization);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
