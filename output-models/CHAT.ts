import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CHATAttributes {
    B_GROUP?: boolean;
    STRID: string;
    STR_USER?: string;
    L_FILEINFORMATION_1?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    B_ACCESSRECIPIENT?: boolean;
    STR_TITLE?: string;
    TXT_MEDIA?: string;
    LUSERIDINSERT?: number;
    TXT_NACHRICHT?: string;
    LUSERID?: number;
    STR_USERGUID?: string;
    STR_GROUP?: string;
}

@Table({
	tableName: "CHAT",
	timestamps: false 
})
export class CHAT extends Model<CHATAttributes, CHATAttributes> implements CHATAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GROUP?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ACCESSRECIPIENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MEDIA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NACHRICHT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GROUP?: string;

}