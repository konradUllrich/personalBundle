import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPP_DOKUMENTEAttributes {
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    STR_TITEL?: string;
    LUSERID?: number;
    STRID: string;
    DTEDIT?: Date;
    L_SORTIERUNG?: number;
}

@Table({
	tableName: "T_SMAPP_DOKUMENTE",
	timestamps: false 
})
export class T_SMAPP_DOKUMENTE extends Model<T_SMAPP_DOKUMENTEAttributes, T_SMAPP_DOKUMENTEAttributes> implements T_SMAPP_DOKUMENTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

}