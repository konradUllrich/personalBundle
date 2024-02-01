import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_BILDERAttributes {
    L_FILEINFORMATION?: number;
    LUSERID?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    STRID: string;
    LUSERIDINSERT?: number;
    STR_TITEL?: string;
}

@Table({
	tableName: "T_BILDER",
	timestamps: false 
})
export class T_BILDER extends Model<T_BILDERAttributes, T_BILDERAttributes> implements T_BILDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

}