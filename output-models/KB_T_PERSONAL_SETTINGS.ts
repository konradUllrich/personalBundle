import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_PERSONAL_SETTINGSAttributes {
    B_MICHBEINEUENKOMMENTARENINFOR?: boolean;
    STRID: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    B_MICHBEIAENDERUNGENINKARTENIN?: boolean;
    LUSERID?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "KB_T_PERSONAL_SETTINGS",
	timestamps: false 
})
export class KB_T_PERSONAL_SETTINGS extends Model<KB_T_PERSONAL_SETTINGSAttributes, KB_T_PERSONAL_SETTINGSAttributes> implements KB_T_PERSONAL_SETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MICHBEINEUENKOMMENTARENINFOR?: boolean;

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
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MICHBEIAENDERUNGENINKARTENIN?: boolean;

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

}