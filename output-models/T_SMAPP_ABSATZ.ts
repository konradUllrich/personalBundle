import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPP_ABSATZAttributes {
    DTEDIT?: Date;
    STRID: string;
    STR_ABSATZTITEL?: string;
    L_SORTIERUNG?: number;
    FKSTRID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    TXT_TEXT?: string;
}

@Table({
	tableName: "T_SMAPP_ABSATZ",
	timestamps: false 
})
export class T_SMAPP_ABSATZ extends Model<T_SMAPP_ABSATZAttributes, T_SMAPP_ABSATZAttributes> implements T_SMAPP_ABSATZAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ABSATZTITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_TEXT?: string;

}