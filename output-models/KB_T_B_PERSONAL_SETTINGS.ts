import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_PERSONAL_SETTINGSAttributes {
    LUSERID?: number;
    LUSERIDINSERT?: number;
    B_EVERYCHANGE?: boolean;
    DTEDIT?: Date;
    DTINSERT?: Date;
    REF_BENUTZER?: number;
    STRID: string;
    B_OWNCHANGE?: boolean;
    FKSTRID?: string;
}

@Table({
	tableName: "KB_T_B_PERSONAL_SETTINGS",
	timestamps: false 
})
export class KB_T_B_PERSONAL_SETTINGS extends Model<KB_T_B_PERSONAL_SETTINGSAttributes, KB_T_B_PERSONAL_SETTINGSAttributes> implements KB_T_B_PERSONAL_SETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EVERYCHANGE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_OWNCHANGE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}