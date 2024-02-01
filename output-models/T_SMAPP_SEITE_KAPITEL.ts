import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPP_SEITE_KAPITELAttributes {
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_UEBERSCHRIFT?: string;
    FKSTRID?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    L_SORTIERUNG?: number;
    LUSERID?: number;
    TXT_INHALT?: string;
}

@Table({
	tableName: "T_SMAPP_SEITE_KAPITEL",
	timestamps: false 
})
export class T_SMAPP_SEITE_KAPITEL extends Model<T_SMAPP_SEITE_KAPITELAttributes, T_SMAPP_SEITE_KAPITELAttributes> implements T_SMAPP_SEITE_KAPITELAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STR_UEBERSCHRIFT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_INHALT?: string;

}